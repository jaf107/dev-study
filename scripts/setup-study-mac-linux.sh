#!/usr/bin/env bash

echo "🔍 Checking Node installation..."
if ! command -v node &> /dev/null
then
    echo "Node not found. Installing Node 20 via nvm..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    source ~/.nvm/nvm.sh
    nvm install 20
    nvm use 20
fi

echo "📦 Installing pnpm..."
npm install -g pnpm

echo "📚 Installing dependencies..."
pnpm install

echo "🧱 Installing study-specific packages..."
pnpm add @mui/material @emotion/react @emotion/styled \
  @chakra-ui/react @chakra-ui/icons framer-motion \
  @fluentui/react @fluentui/react-components

echo "🏗️ Building project..."
pnpm build

echo "🎉 Setup complete!"

# Make it executeable
# chmod +x setup-study.sh

