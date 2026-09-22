// Web Audio API Native Ambient Sound Engine for SILENT
// Generates a cinematic, subtle dark-drone atmosphere without external audio assets.

class DarkDroneAudioEngine {
  private ctx: AudioContext | null = null;
  private masterGain: GainNode | null = null;
  private osc1: OscillatorNode | null = null;
  private osc2: OscillatorNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private lfo: OscillatorNode | null = null;
  private lfoGain: GainNode | null = null;
  private isPlaying: boolean = false;

  private init() {
    if (this.ctx) return;
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    this.ctx = new AudioCtx();

    // Master Gain
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    // Low-pass resonant filter
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(140, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(4.0, this.ctx.currentTime);
    this.filter.connect(this.masterGain);

    // Sub-bass drone oscillator 1 (43.65 Hz - F1 deep resonance)
    this.osc1 = this.ctx.createOscillator();
    this.osc1.type = 'triangle';
    this.osc1.frequency.setValueAtTime(43.65, this.ctx.currentTime);
    this.osc1.connect(this.filter);

    // Drone oscillator 2 (65.41 Hz - C2 fifth harmonic)
    this.osc2 = this.ctx.createOscillator();
    this.osc2.type = 'sine';
    this.osc2.frequency.setValueAtTime(65.41, this.ctx.currentTime);
    this.osc2.connect(this.filter);

    // Slow LFO for organic breath-like filter modulation (0.08 Hz)
    this.lfo = this.ctx.createOscillator();
    this.lfo.frequency.setValueAtTime(0.08, this.ctx.currentTime);
    this.lfoGain = this.ctx.createGain();
    this.lfoGain.gain.setValueAtTime(40, this.ctx.currentTime);
    this.lfo.connect(this.lfoGain);
    this.lfoGain.connect(this.filter.frequency);

    this.osc1.start();
    this.osc2.start();
    this.lfo.start();
  }

  public toggle(): boolean {
    if (!this.ctx) {
      this.init();
    }

    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (!this.masterGain || !this.ctx) return false;

    if (this.isPlaying) {
      // Fade out
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);
      this.isPlaying = false;
    } else {
      // Fade in (discrete, gentle, high-fashion background level)
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      this.masterGain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 2.0);
      this.isPlaying = true;
    }

    return this.isPlaying;
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const audioEngine = new DarkDroneAudioEngine();
