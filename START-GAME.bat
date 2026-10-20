@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Install Node.js 22 LTS or newer, then run this file again.
  pause
  exit /b 1
)
if exist node_modules\vite\bin\vite.js goto ready
call npm.cmd install
if errorlevel 1 (
  echo Dependency installation failed. Check your internet connection and retry.
  pause
  exit /b 1
)
:ready
start "" http://localhost:5173
call npm.cmd run dev
