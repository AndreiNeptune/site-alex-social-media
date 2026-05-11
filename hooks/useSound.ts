"use client";

import { useCallback, useRef } from "react";

export function useCinematicSound() {
  const audioCtx = useRef<AudioContext | null>(null);

  const initAudio = useCallback(() => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioCtx.current.state === "suspended") {
      audioCtx.current.resume();
    }
  }, []);

  const playHover = useCallback(() => {
    initAudio();
    if (!audioCtx.current) return;

    const oscillator = audioCtx.current.createOscillator();
    const gainNode = audioCtx.current.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(60, audioCtx.current.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(40, audioCtx.current.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0, audioCtx.current.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.02, audioCtx.current.currentTime + 0.05);
    gainNode.gain.linearRampToValueAtTime(0, audioCtx.current.currentTime + 0.2);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.current.destination);

    oscillator.start();
    oscillator.stop(audioCtx.current.currentTime + 0.2);
  }, [initAudio]);

  const playImpact = useCallback(() => {
    initAudio();
    if (!audioCtx.current) return;

    const oscillator = audioCtx.current.createOscillator();
    const gainNode = audioCtx.current.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(40, audioCtx.current.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(20, audioCtx.current.currentTime + 0.5);

    gainNode.gain.setValueAtTime(0, audioCtx.current.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.03, audioCtx.current.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioCtx.current.currentTime + 0.8);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.current.destination);

    oscillator.start();
    oscillator.stop(audioCtx.current.currentTime + 0.8);
  }, [initAudio]);

  return { playHover, playImpact };
}
