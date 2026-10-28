# @chicbuilder/chic-core

[![CI](https://github.com/ChicBuilder/chic-core/actions/workflows/ci.yml/badge.svg)](https://github.com/ChicBuilder/chic-core/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Bun](https://img.shields.io/badge/Bun-1.4+-black.svg)](https://bun.sh)

Biomechanical rep velocity tracking, multi-formula 1RM calculation, and offline-first IndexedDB sync queue state machine.

## Installation

```bash
bun add @chicbuilder/chic-core
# or
npm install @chicbuilder/chic-core
```

## Quick Start

```typescript
import { analyzeSet, estimateOneRepMax } from '@chicbuilder/chic-core';

const 1rm = estimateOneRepMax(100, 5);
console.log('Estimated 1RM:', 1rm.average);
```
