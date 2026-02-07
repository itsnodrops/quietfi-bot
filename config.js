/**
 * QuietFi Bot Configuration
 * Edit these values to customize your bot
 */

export default {
    // On-chain operation settings
    ONCHAIN: {
        // Automatically stake to sqUSD after mint
        STAKE_AFTER_MINT: true,
    },
    
    // Daily limits (per account)
    DAILY_LIMITS: {
        // ETH faucet is 7 days, tracked separately
        // USDC faucet is handled by contract cooldown
        MAX_MINTS_PER_DAY: 5,
        MAX_WITHDRAWS_PER_DAY: 5,
    },
    
    // Delays (milliseconds)
    DELAYS: {
        BETWEEN_ACCOUNTS_MS: 15000,
        BETWEEN_TASKS_MS: 5000,
        BETWEEN_OPERATIONS_MS: 3000,
    },
    
    // Loop mode - re-run after completion
    ENABLE_LOOP: false,
    LOOP_TIME: '24:00:00', // HH:MM:SS format
};
