/**
 * @launchstore/shared-puck
 *
 * Single source of truth for Puck components and the AI capability registry.
 * Consumed by:
 *   - launchstore-frontend   (Puck editor)
 *   - launchstore-storefront  (Puck renderer)
 *   - launchstore (backend)   (reads the auto-generated registry JSON)
 *
 * T-001: package skeleton.
 * T-002: Hero component family migrated.
 */

export const SHARED_PUCK_VERSION = '0.0.1';

export * from './puck/components';

