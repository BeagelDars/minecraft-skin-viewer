import React, { useEffect, useRef, useState } from 'react';
import * as skinview3d from 'skinview3d';
import { Camera, RotateCcw, Play, Pause, Layers, Eye, Shield, RefreshCw } from 'lucide-react';
import { SkinModel } from '../types/minecraft';

interface SkinViewer3DProps {
  skinUrl: string;
  capeUrl?: string | null;
  model: SkinModel;
  playerName: string;
}

type AnimationType = 'none' | 'idle' | 'walk' | 'run' | 'wave';
type BackEquipment = 'cape' | 'elytra';

export const SkinViewer3D: React.FC<SkinViewer3DProps> = ({
  skinUrl,
  capeUrl,
  model,
  playerName
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const viewerRef = useRef<skinview3d.SkinViewer | null>(null);

  const [animation, setAnimation] = useState<AnimationType>('idle');
  const [isRotating, setIsRotating] = useState<boolean>(true);
  const [showOuterLayers, setShowOuterLayers] = useState<boolean>(true);
  const [backEquipment, setBackEquipment] = useState<BackEquipment>('cape');
  const [showCape, setShowCape] = useState<boolean>(true);
  const [isLoadingSkin, setIsLoadingSkin] = useState<boolean>(true);

  // Initialize viewer once
  useEffect(() => {
    if (!canvasRef.current) return;

    const viewer = new skinview3d.SkinViewer({
      canvas: canvasRef.current,
      width: 340,
      height: 420,
      skin: skinUrl,
      model: model === 'slim' ? 'slim' : 'default'
    });

    viewer.fov = 68;
    viewer.zoom = 0.9;
    viewer.autoRotate = true;
    viewer.autoRotateSpeed = 0.6;
    
    // Set natural light setup
    viewer.cameraLight.intensity = 0.7;
    viewer.globalLight.intensity = 2.4;

    // Default animation
    const idleAnim = new skinview3d.IdleAnimation();
    idleAnim.speed = 0.8;
    viewer.animation = idleAnim;

    viewerRef.current = viewer;

    return () => {
      viewer.dispose();
      viewerRef.current = null;
    };
  }, []);

  // Update skin texture & model
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer || !skinUrl) return;

    setIsLoadingSkin(true);
    viewer.loadSkin(skinUrl, {
      model: model === 'slim' ? 'slim' : 'default'
    }).then(() => {
      setIsLoadingSkin(false);
    }).catch(() => {
      setIsLoadingSkin(false);
    });
  }, [skinUrl, model]);

  // Update cape texture & back equipment
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    if (capeUrl && showCape) {
      viewer.loadCape(capeUrl, {
        backEquipment: backEquipment
      }).catch(() => {
        // cape load failed
      });
    } else {
      viewer.loadCape(null);
    }
  }, [capeUrl, showCape, backEquipment]);

  // Handle auto-rotate toggle
  useEffect(() => {
    if (!viewerRef.current) return;
    viewerRef.current.autoRotate = isRotating;
    viewerRef.current.autoRotateSpeed = 0.6;
  }, [isRotating]);

  // Handle animation changes
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    if (animation === 'none') {
      viewer.animation = null;
    } else if (animation === 'idle') {
      const anim = new skinview3d.IdleAnimation();
      anim.speed = 0.8;
      viewer.animation = anim;
    } else if (animation === 'walk') {
      const anim = new skinview3d.WalkingAnimation();
      anim.speed = 0.9;
      viewer.animation = anim;
    } else if (animation === 'run') {
      const anim = new skinview3d.RunningAnimation();
      anim.speed = 1.0;
      viewer.animation = anim;
    } else if (animation === 'wave') {
      const anim = new skinview3d.WaveAnimation();
      anim.speed = 1.2;
      viewer.animation = anim;
    }
  }, [animation]);

  // Handle outer layers toggle
  useEffect(() => {
    const viewer = viewerRef.current;
    if (!viewer || !viewer.playerObject) return;

    const skin = viewer.playerObject.skin;
    if (skin) {
      skin.head.outerLayer.visible = showOuterLayers;
      skin.body.outerLayer.visible = showOuterLayers;
      skin.rightArm.outerLayer.visible = showOuterLayers;
      skin.leftArm.outerLayer.visible = showOuterLayers;
      skin.rightLeg.outerLayer.visible = showOuterLayers;
      skin.leftLeg.outerLayer.visible = showOuterLayers;
    }
  }, [showOuterLayers]);

  // Reset camera view
  const handleResetCamera = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    viewer.controls.reset();
    viewer.zoom = 0.9;
  };

  // Capture snapshot
  const handleCaptureSnapshot = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;

    viewer.render();
    const dataUrl = viewer.canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = dataUrl;
    a.download = `${playerName}-render.png`;
    a.click();
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm flex flex-col items-center">
      {/* 3D Canvas Container */}
      <div className="relative w-full max-w-[340px] h-[420px] bg-gradient-to-b from-slate-50 to-slate-100/70 rounded-lg overflow-hidden border border-slate-100 flex items-center justify-center">
        <canvas ref={canvasRef} className="cursor-grab active:cursor-grabbing outline-none" />

        {isLoadingSkin && (
          <div className="absolute inset-0 bg-white/60 backdrop-blur-xs flex items-center justify-center text-slate-500 text-sm">
            <RefreshCw className="w-5 h-5 animate-spin mr-2" />
            Loading model...
          </div>
        )}

        {/* Snapshot action floating button */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-xs border border-slate-200 rounded-md p-1 shadow-xs">
          <button
            onClick={handleCaptureSnapshot}
            title="Download PNG snapshot"
            className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
          >
            <Camera className="w-4 h-4" />
          </button>
          <button
            onClick={handleResetCamera}
            title="Reset view"
            className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Controls Bar */}
      <div className="w-full mt-4 space-y-3">
        {/* Animation Picker */}
        <div className="flex items-center justify-between text-xs text-slate-600">
          <span className="font-medium text-slate-700">Motion</span>
          <div className="inline-flex bg-slate-100 p-0.5 rounded-lg">
            {(['idle', 'walk', 'run', 'wave', 'none'] as AnimationType[]).map((type) => (
              <button
                key={type}
                onClick={() => setAnimation(type)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all capitalize ${
                  animation === type
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Rotation & Layer Switches */}
        <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
          <button
            onClick={() => setIsRotating(!isRotating)}
            className={`flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg border text-xs font-medium transition-colors ${
              isRotating
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            {isRotating ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            Auto Rotate
          </button>

          <button
            onClick={() => setShowOuterLayers(!showOuterLayers)}
            className={`flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg border text-xs font-medium transition-colors ${
              showOuterLayers
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            Outer Layers
          </button>
        </div>

        {/* Cape & Elytra Switch (if cape exists) */}
        {capeUrl && (
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
            <button
              onClick={() => setShowCape(!showCape)}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-medium transition-colors ${
                showCape
                  ? 'border-slate-300 bg-slate-100 text-slate-800'
                  : 'border-slate-200 text-slate-400 hover:text-slate-600'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              {showCape ? 'Cape Visible' : 'Cape Hidden'}
            </button>

            {showCape && (
              <div className="inline-flex bg-slate-100 p-0.5 rounded-lg">
                <button
                  onClick={() => setBackEquipment('cape')}
                  className={`px-2 py-0.5 rounded text-xs font-medium ${
                    backEquipment === 'cape'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500'
                  }`}
                >
                  Cape
                </button>
                <button
                  onClick={() => setBackEquipment('elytra')}
                  className={`px-2 py-0.5 rounded text-xs font-medium ${
                    backEquipment === 'elytra'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500'
                  }`}
                >
                  Elytra
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
