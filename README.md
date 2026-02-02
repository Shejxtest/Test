# Zaliczenie – Programowanie Smart Kontraktów

Projekt zawiera deploy dwóch smart kontraktów na testnet Sepolia:

- **ERC-20:** MyToken  
  Adres: `0xfA623dbc15DE370BA790f4C8ff3Fe96c63E67161`  
  [Link do Sepolia Etherscan](https://sepolia.etherscan.io/address/0xfA623dbc15DE370BA790f4C8ff3Fe96c63E67161)

- **ERC-721:** MyNFT  
  Adres: `0x73Dcf87b75FDae5DCC8465bE92E24fa43bb38E0d`  
  [Link do Sepolia Etherscan](https://sepolia.etherscan.io/address/0x73Dcf87b75FDae5DCC8465bE92E24fa43bb38E0d)

---

## Uruchamianie projektu lokalnie

1. Zainstaluj zależności:

```bash
npm install

## Uruchamianie projektu lokalnie

1. Zainstaluj zależności:

```bash
npm install

Skompiluj kontrakty:

npx hardhat compile

npx hardhat test

npx hardhat run scripts/deploy.js --network sepolia
