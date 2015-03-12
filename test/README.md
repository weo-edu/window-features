# window-features

Generates a window features string, per: https://developer.mozilla.org/en-US/docs/Web/API/Window/open

## Usage

```javascript
windowFeatures({width: 100, height: 100, resizable: true}) // === 'width=100,height=100,resizable=yes'
```