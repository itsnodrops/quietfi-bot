# QuietFi Bot

Automated bot for interacting with Quiet Finance Testnet Campaign with support for multi-account, proxy rotation, on-chain operations, and concurrent processing.

> **WARNING**
> **Code Obfuscation Notice**: This script will be obfuscated to prevent unauthorized code redistribution. The full source code will be shared publicly after the event ends.

> **Auto-Register Feature**: This bot supports automatic account registration with referral codes. For access to this feature, check our Telegram channel: [@NoDrops](https://t.me/NoDrops)

## Features

- **Wallet Authentication** - Connect wallet and manage sessions automatically
- **ETH Faucet** - Claim testnet ETH (7-day cooldown per X handle)
- **USDC Faucet** - Claim daily USDC + one-time bonus
- **On-Chain Operations** - Auto mint qUSD, stake to sqUSD, and withdraw
- **Task Completion** - Auto-complete social tasks for bonus points
- **Multi-Account** - Process multiple accounts concurrently
- **Pool-Based Concurrency** - Proxies immediately reassigned when idle for max efficiency
- **Proxy Support** - HTTP, HTTPS, SOCKS4, and SOCKS5 proxies with rotation
- **TUI Dashboard** - Real-time monitoring of all account activities
- **Smart Delays** - Random delays between accounts to avoid rate limiting
- **Loop Mode** - Schedule automatic reruns at specified intervals
- **Points Tracking** - Persistent points tracking across restarts

## Requirements

- **[QuietFi Testnet](https://testnet.quiet.finance/ref/0uYkCK)** accounts
- **Node.js** v18 or higher
- **npm** (Node Package Manager)
- **Private Keys** - Ethereum wallet private keys
- **X (Twitter) Handles** - Required for ETH faucet
- **Proxies** (Optional but recommended for multiple accounts)

## Quick Start

### 1. Clone or Download the Repository

```bash
git clone https://github.com/itsnodrops/quietfi-bot.git
cd quietfi-bot
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Accounts

Create a `.env` file with your private keys:

```env
# Private Keys (numbered format)
PK_1=your_private_key_1
PK_2=your_private_key_2
PK_3=your_private_key_3

# X (Twitter) Handles - Required for ETH faucet
# Must match PK index (X_1 for PK_1, X_2 for PK_2, etc.)
X_1=your_twitter_username
X_2=another_username
X_3=third_username
```

### 4. Add Proxies (Optional)

Edit `proxies.txt` to add your proxies (one per line):

```
http://user:pass@proxy1.com:8080
socks5://user:pass@proxy2.com:1080
socks4://proxy3.com:1080
```

**Supported formats:**
- HTTP: `http://user:pass@host:port` or `http://host:port`
- HTTPS: `https://user:pass@host:port` or `https://host:port`
- SOCKS5: `socks5://user:pass@host:port` or `socks5://host:port`
- SOCKS4: `socks4://user:pass@host:port` or `socks4://host:port`

### 5. Run the Bot

```bash
npm start
```

## How It Works

### Processing Flow

1. **Registration** - Registers new accounts with referral code
2. **ETH Faucet** - Claims testnet ETH (7-day cooldown)
3. **USDC Faucet** - Claims daily USDC + one-time bonus
4. **On-Chain** - Mints qUSD, stakes to sqUSD, withdraws small amounts
5. **Tasks** - Completes available social tasks for points
6. **Points** - Fetches and saves current points
7. **Loop** - Waits until next scheduled run (if enabled)

### Pool-Based Concurrency

The bot uses a **proxy pool** for maximum efficiency:
- **10 proxies, 50 accounts** -> 10 accounts run concurrently
- When one account finishes, its proxy is **immediately** reassigned
- Random delays between account completions

## Configuration

Edit `config.js` to customize bot behavior:

```javascript
export default {
    // On-chain operation settings
    ONCHAIN: {
        STAKE_AFTER_MINT: true,   // Auto stake to sqUSD
    },
    
    // Delays (milliseconds)
    DELAYS: {
        BETWEEN_ACCOUNTS_MS: 15000,
        BETWEEN_TASKS_MS: 5000,
        BETWEEN_OPERATIONS_MS: 3000,
    },
    
    // Loop mode
    ENABLE_LOOP: false,
    LOOP_TIME: '24:00:00', // HH:MM:SS format
};
```

## Data Storage

| Path | Purpose |
|------|---------|
| `.env` | Private keys (PK_N) and X handles (X_N) |
| `proxies.txt` | Proxy list |
| `logs/process.log` | Activity logs |
| `data/data.json` | Account data, points, user agents (gitignored) |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| No accounts loaded | Check `.env` for PK_1, PK_2, etc. |
| Proxy connection failed | Verify proxy format includes protocol (http://, socks5://, etc.) |
| ETH Faucet: Handle already used | Each X handle can only be used once per 7 days |
| Insufficient funds for gas | Wait for ETH faucet or add ETH manually |
| All proxies blocked | Add more proxies or wait for cooldown |

## Utility Scripts

Manage bot data and logs easily with these npm scripts:

```bash
npm start              # Run the bot
npm run clear-log      # Clear log file
npm run clear-data     # Reset account data
npm run check-config   # Check configuration status
npm run check-data     # Show accounts summary table
npm run check-log      # Watch log file in real-time
```

## Notes

- **Faucet Cooldowns**: ETH (7 days), USDC Daily (24 hours), USDC Bonus (one-time)
- **Concurrency**: Based on proxy count (1 account at a time without proxies)
- **User Agents**: Randomly generated per account and persisted across restarts
- **Data Persistence**: Account data stored locally, never shared or uploaded

## Contribution

Feel free to open pull requests, report bugs, or suggest features. Contributions are always welcome!

## Support the Project

If this project has been helpful to you, consider supporting its development with donations:

| Network | Address |
|---------|---------|
| **EVM** | `0xfD1847bFAA92fb8c0d100b207d377490C5acd34c` |
| **SOL** | `BBZjp11sJNvekXZEBhhYDro9gsyyhEKXXcfEEub5ubje` |
| **TON** | `UQDoLQNF-nt9CFOHBs9mQqxH9YJKrZ6mFPbAeHH8Jo9xIGCb` |
| **SUI** | `0x79672047f5e2fa0c4db3e4278f80b9ac504b2858c6d82d63f833fbdcc6805175` |
| **TRX** | `0x79672047f5e2fa0c4db3e4278f80b9ac504b2858c6d82d63f833fbdcc6805175` |


## Disclaimer

This tool is for educational and testing purposes only on the [QuietFi Testnet](https://testnet.quiet.finance/ref/0uYkCK). Use at your own risk. The authors are not responsible for any consequences resulting from the use of this software.

## License

This project is licensed under the [MIT License](https://github.com/itsnodrops/quietfi-bot/blob/main/LICENSE).
