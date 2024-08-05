/**
 * Build entry point for CDN builds.
 * You SHOULD NOT import this file except if you plan to build browser distribution of Fluid Player.
 */

import fluidPlayerInitializer from './index';

if (window) {
    /**
     * Register public interface.
     */
    if (!window.fluidPlayer) {
        window.fluidPlayer = fluidPlayerInitializer;
    }
}

