## Next - Parallel Routes

<img src="https://media.istockphoto.com/id/1402763474/photo/glass-lowercase-letter-n.webp?b=1&s=170667a&w=0&k=20&c=o6M7-ISejHoEpcnqeum5HZBPTomGg6DXakmtdpU7CwY=" alt="Next" width="350" />

### Setup

`npx create-next-app@latest`

---

_layout.tsx_

Add children with name of parallel route to layout

```JavaScript
    export default function RootLayout({
        children,
        data,
    }...
```

_default.tsx_

Must have default.tsx inside parallel folder

```JavaScript
    //@data
        //[id]
            //page.tsx
        //-default.tsx
    //page.tsx
```
