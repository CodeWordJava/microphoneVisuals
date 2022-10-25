class Microphone {
  constructor() {
    this.initialized = false;
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then(function (stream) {
        this.audioContext = new AudioContext();
        this.microphone = this.audioContext.createMediaElementSource(stream);
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 512;
        const bufferLength = this.analyser.frequencyBinCount;
        this.dataArray = new Uint8Array(bufferLength);
        this.microphone.connect(this.analyser);
        this.initialized = true;
      });
  }
}
