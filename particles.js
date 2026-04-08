// Simple canvas particle system for recommendation celebration
class ParticleSystem {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.maxParticles = 120;
        this.animationId = null;
        this.mouseX = 0;
        this.mouseY = 0;
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createExplosion(x, y, color = null) {
        const explosionColor = color || this.getThemeColor();
        for (let i = 0; i < 60; i++) {
            if (this.particles.length < this.maxParticles) {
                this.particles.push({
                    x: x,
                    y: y,
                    vx: (Math.random() - 0.5) * 14,
                    vy: (Math.random() - 0.5) * 14,
                    size: Math.random() * 5 + 2,
                    life: 1,
                    decay: Math.random() * 0.015 + 0.008,
                    color: explosionColor
                });
            }
        }
        this.animate();
    }

    updateMouse(x, y) {
        this.mouseX = x;
        this.mouseY = y;

        // Trail particles (1-2 small ones)
        if (this.particles.length < this.maxParticles) {
            for (let i = 0; i < 2; i++) {
                this.particles.push({
                    x: x + (Math.random() - 0.5) * 20,
                    y: y + (Math.random() - 0.5) * 20,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    size: Math.random() * 3 + 1,
                    life: 0.6,
                    decay: 0.015,
                    color: this.getThemeColor()
                });
            }
        }
    }

    clickBurst(x, y) {
        // Stronger burst on click (15-20 particles)
        for (let i = 0; i < 18; i++) {
            if (this.particles.length < this.maxParticles) {
                this.particles.push({
                    x: x,
                    y: y,
                    vx: (Math.random() - 0.5) * 12,
                    vy: (Math.random() - 0.5) * 12,
                    size: Math.random() * 4 + 2,
                    life: 0.8,
                    decay: 0.012,
                    color: this.getThemeColor()
                });
            }
        }
        this.animate();
    }

    getThemeColor() {
        const theme = document.documentElement.getAttribute('data-theme') || 'dark';
        const colors = {
            dark: '#d90429',
            neon: '#00ffff',
            light: '#ef4444'
        };
        return colors[theme] || '#ffb703';
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Always animate mouse trails
        if (this.particles.length > 0 || this.mouseX) {
            this.particles = this.particles.filter(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vx *= 0.97;
                p.vy *= 0.97;
                p.life -= p.decay;
                p.size *= 0.995;

                if (p.life > 0) {
                    this.ctx.save();
                    this.ctx.globalAlpha = p.life;
                    this.ctx.fillStyle = p.color;
                    this.ctx.shadowBlur = 8;
                    this.ctx.shadowColor = p.color;
                    this.ctx.beginPath();
                    this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    this.ctx.fill();
                    this.ctx.restore();
                }
                return p.life > 0 && this.particles.length < this.maxParticles * 1.2;
            });

            this.animationId = requestAnimationFrame(() => this.animate());
        }
    }
}

// Global particle system
let particles = null;

// Global particle system
window.particles = null;

// Init on load
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '1000';
    document.body.appendChild(canvas);
    window.particles = new ParticleSystem(canvas);
});
