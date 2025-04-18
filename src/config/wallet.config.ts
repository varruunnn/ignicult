import { inAppWallet, createWallet } from "thirdweb/wallets";
import { darkTheme } from "thirdweb/react";

export const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
        "github",
        "twitch",
        "apple",
        "guest",
      ],
    },
  }),
  createWallet("com.coinbase.wallet"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.metamask"),
];

export const walletTheme = darkTheme({
  colors: {
    primaryButtonBg: "#202020",
    primaryButtonText: "#FFFFFF",
    connectedButtonBg: "hsl(240, 9%, 3%)",
    connectedButtonBgHover: "hsl(231, 11%, 12%)",
  },
});