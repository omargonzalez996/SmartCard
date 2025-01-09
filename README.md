## SmartCard website made with React + Vite

### Description
---
Rebuild of Zarbyte's SmartCard Website in SPA format made with:
- React
- Vite
- Tailwind
- MUI
### Run it!
---
install dependencies
```console
yarn
```
run it in localhost
```console
yarn dev
```

### Use API data
---
by default the SPA is using an Offline JSON with data

To fetch data from the API:
Uncomment the `UseEffect` in `App.jsx`
``` javascript
	  // useEffect(() => {
	  //   fetchData()
	  // }, [])
```
Set default `UseState` for loading state as `True`
```javascript
	const [loading, setLoading] = useState(true);
```
Modify the `UseState` to select 1 of 2 UUID's to fetch data from the API
```javascript
	  const [user, setUser] = useState(1); // 1 for 'Ron Helms' Data, 2 for an empty JSON
```
