Write-Output "🔍 Checking Node installation..."

if (-Not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Output "Node not found. Install Node 20 LTS manually from nodejs.org"
    exit 1
}

Write-Output "📦 Installing pnpm globally..."
npm install -g pnpm

Write-Output "📚 Installing dependencies..."
pnpm install

Write-Output "🧱 Installing study-specific packages..."
pnpm add @mui/material @emotion/react @emotion/styled `
  @chakra-ui/react @chakra-ui/icons framer-motion `
  @fluentui/react @fluentui/react-components

Write-Output "🏗️ Building project..."
pnpm build

Write-Output "🎉 Setup complete!"

# powershell -ExecutionPolicy Bypass -File setup-study.ps1

