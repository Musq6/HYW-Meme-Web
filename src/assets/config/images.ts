const modules = import.meta.glob('../imgs/webp/*.{png,jpg,jpeg,gif,webp}', {
    eager: true,
    import: 'default'
});

export const imageList = Object.values(modules) as string[];
