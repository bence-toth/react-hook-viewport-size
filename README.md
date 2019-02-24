# react-hook-viewport-size :straight_ruler:

A React hook for detecting viewport size.

## Installation

Using `npm`:

```sh
npm install --save react-hook-viewport-size
```

Using `yarn`:

```sh
yarn add react-hook-viewport-size
```

## Usage

```jsx
import React from 'react'
import useViewportSize from 'react-hook-viewport-size'

const ComponentWithViewportSize = () => {
  const [viewportWidth, viewportHeight] = useViewportSize()

  return (
    <p>Viewport size: {viewportWidth} × {viewportHeight}</p>
  )
}
```

## Contributions

Contributions are welcome. File bug reports, create pull requests, feel free to reach out at tothab@gmail.com.

## Licence

LGPL-3.0
