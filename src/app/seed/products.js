const products = [
  {
    id: "1",
    name: "Dell Laptop",
    description: "Dell Laptop, Intel Core i3, 8GB Ram, Intel HD Graphics",
    price: 399,
    stock: 47,
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/black/notebook-g16-7630-nt-black-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3500&hei=2625&qlt=100,1&resMode=sharp2&size=3500,2625&chrss=full&imwidth=5000",
    isFeatured: true,
    categoryId: "6492280fd04210c2f8f65638"
  },
  {
    id: "2",
    name: "HP Laptop",
    description: "HP Laptop, Intel Core i5, 16GB Ram, GT",
    price: 549,
    stock: 13,
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDw8QDw8PDw4QDQ8PDxAPDRAPDhAOFREWFhURFRUYHighGBslGxUVITEhJS0rLi4vFx8zODMsNygvLisBCgoKDQ0ODg0NDysZFRkrLSsrLSsrKysrKysrKysrLSsrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAgMEBQYBB//EAEEQAAICAQEEBgcFBQYHAAAAAAABAgMRBAUSITEGE0FRYYEiMlJxkaHRQlNykrEHI2KCwRQzQ2Pw8RYkRHOisuH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACnV2uFdk0suNcpJc8tLODQ6HVTt3t62xTUnndnurHY0l2YOkOS19D0t+9H1MZS/yc8Y/ytrylEDaKqf31v52e9XZ99Z+YnXJNJrimsr3EwKd2376z4r6EW7fvp/CP0L2QkBS7bvvpfCH0IvU3L/Ff5YfQnIqkB49Zf8Aev8AJD6EXtC/7z/wh9CEimQFz2pf7a/JH6EXti/21+SJjSKZAZj23qPaj+RHj29f3w/Ia+RVIg2b6Q6j+D8n/wBMjQdJJb6Vyiot434prd8Wu1GgkyuQH0hM9Of6L7T349TN+nBeg39qHd71+nuOgKAAAAAAAAAAAAAAAABhbW0fW14STnF70M8E3hpxfg02vPPYZoA5bY9+63U28Y3q88Huey/FPKa8DcGs25o3CxWV85Sc4f8AdSzOH80U5e+Mu8y9HqFZCMl2r5gXshIm2VsCuRVMtkVSApmUyL5FMgKJFMi+ZTMCmRVItkVSIKpEGTkVyAVXShKM4vEovKfid/svXR1FUbI8+Ul7M1zX+u8+eMz9hbTenty/7qeFYu7ul5fpkDvweRaaTXFNZTXLB6UAAAAAAAAAAAAAAAAU6zTqyEoPhnGGucZJ5jJeKaT8jmdLY6bXGSUYzk04rlC5etFeDypLwaOsNLt/RJrfXBS3Yzfszz+7s8m91+Ev4QLN48bMLZ+pc44lwnF7s13SRktgJFciTZXJgQmUzLJFUgKplMi6RTMCHVyabUZNLm1FtL3sx5HUK/quqshHehZSouKaXpQWV543ljwOP6X9IqKLuNajCO5O6yMuHU2S3Fbjl6MnDeXYpp8eTCciqRY2VSIIMgyUiDA6zojtXeX9nm/Sis1N9se2Hl+nuOnPlddkoSjKLalFqUWuaa5H0XYu0o6mpTXCS9GyPszX9HzRRngAAAAAAAAAAAAAAAELa1KMoySlGUXGSfJprDTJgDkdTCVFrby8OMLG+coP+7t+CcX4xZnKWTN25pN+G+k5OCkpRSy51P14pd/BSXjFLtZo9DbjNbak443ZLipQfqyXkBnuRW2eORFsDyTK5MlJlcmBCRTIskyqTAX7Ssq09ihCVso4sqjBwU1YnnhvcHwzwf8AU+PR6QddRtHrNNP+01adStqnLqni6uunVSUcZjHfjVZu97byfXJGDqtBTY3KyqucnXKpylCLk6pLEoN83F93IDQfs+1c7dmaWVnGSjOtPvjCcox+SS8jfSPa6owioQjGEIpRjGMVGMYrkklyRGQFciDJSIMgizP2HtR6a1S4uuXo2Lvj3rxX17zXsiB9YrmpJSi000mmuTT5Mkch0N2v/wBNY+90tvzcP6rz8DrygAAAAAAAAAAAAAAAAcltjSOmzMVwWbK/GvPp1fyt5XhJJcjrTD2ro+uraWFZF79bfJTXf4NNxfhJgc/XapJNcmsnrZgaazdlu4ajLLinzjJPEq34p5RluQEmyuTDZBsDyTKpMlJlcmBCTKpE5MrkwK5FUiyRVICEitk5EGQQZFkmRZQjNxalFtSTTTXNNcmfSOj+1VqqVJ4VkcRsiuyXf7nz/wBj5sZ2xdpS010bFxi/Rsj7UO3zXNEH04EKbYzjGUWpRklKLXJp8mTKAAAAAAAUX62qv17IQ8JTSfwAvBqrOkGnXquU/wAMH+ssFD29n1a0vGUs/JfUDeA0a2jZL7WPCKS/XieStzzbfvbf6gbeeprjznH3Zy/gjGs2tUk8ZljnjCS9+80au2w1mrmu3HngCG1b4WXNw3UrHlbs99RvS7WliO8ljGece9ntF29HPbya7n3Gm2ltStRcZW4Txjisp54NZ7U0mvcXbM16tjG1Y9J7liXJWrtx3Pg/NAbZsg2ebxFsA2VyZ62QkwIyZXJkmyEgK5FbLJFbAgyDJsjgggeYJ7pKNTfYUVYPVAyK6cvdWZT9mEXOXwRt9J0f1M3H91GuL5ytmt5LwjHPHweCDP6FayXp0Sy4xTsg/ZWcSj8Wn8TqjA2Ts2Oni0nvSfrSxjPgl2IzygAABqOkt2ohVvaeW60/TarVkt3vw+XwNuAPlmp2jqJpys1MpQ7c27kEvFcIorqyknjh3rivifQ9o9HtJqN7raYNyTUpR9CUvxY9bzycvZ+zHS1yU9LOWnkpKWIOVUW12NVOKa4dqYGDTYZcdRju82kvMybNhamvnUppfarmpeeHh/BM1eu2TXbJdY7Kp4wk81vH4JrD9+AMuW26YZUprKWcRlvcDA1XTKuL3YrMuzPasfExL+i88ehZCS7FZVxz+JfQ1H/Dusq5Qwst/wDK7u58JcX5IDM1HSu6xN1RbWM8ow/92n8jQ6jats1LNyb4JxVc72k3jnDC+XDmR1mnVcZdaknuvL1lcn7/AF2uHuwY6m3F4V8sx4dU+qh/LvYeMeLKK5vEXJp8XhynqIw4Nd0efuNl0Z2iqLVCWepve5LdplCEZfZnvN97xnx8DUWS3d7LprlwlmUHba0nx48Hn4+Zj6iaS9Jyk2+EbLFDezleouLXhugfW6Zvinzjwfj3MsbNB0d2jK6hOeeupxCzKknOv7M+KTf1TN2pZIPWyDZ62VykAbISZ5KwqlYBNkGyrrcvdWZTfKMIuc35I2uj6P6u3j1caY+1c/Sx+BcfjgDWnkVl7qzKb5QhFzk/JHX6PohSsO6ydz7s9XX8E8/M3ul0dVS3aq4Vx7oRUc+/HMDitF0e1Vn+HGmPtWvMvKC/rg3mk6K0xw7pzufdnq6/KMePxZ0AAq02mrqW7XCMI90IqK+RaAAAAAAAAAAAAAjOCksSSa7msokAMCzZFD5Q3H/ltxX5fV+Rjz2M16s8+E48fivobcAc/ds2WMTrUl4Ymvhz+RpNodFdFYpKVO42m2q3Kmb8k0zuyMoJrDSa7msoD4FoZbLv1T0MJ6qm5WzrVU8QqnOKbfp1PLWF9pI2en0enbcNJLS2TjmLjTZW7k1zTi3v9ncfWdR0f0dlkbZaal2wbcLOrirItrDafubOaq/Zfs+rWV62jrqrq7ZW7vWb1c5Si095P3vlgDh6bLtNdGc4TUeMbIyi1vVv1lx8n5HUTW5jDUq5RUq5p5UoPiuJvttdH9TbZp503yrjVc521rEo31uLTrecY5rjxwUanYeqm31cY1qXBuycd3HujkDRTuMeWpy1FZlJ8oxTlJ+5I6zRdDIJqWotlb/BD93Dzecv5HQ6LQU0LFNUK127sUm/e+b8wOD0fR/W3YfVqmPtXvEsfgWX8Uje6LoZSsO+yy59ybqr+CefmdQAMfSaKqlbtVcK1/BFRz7+8yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//2Q==",
    isFeatured: false,
    categoryId: "6492280fd04210c2f8f65638"
  },
  {
    id: "3",
    name: "Apple Ipad",
    description: "Apple Ipad",
    price: 200,
    stock: 15,
    image: "https://johnlewis.scene7.com/is/image/JohnLewis/240342755?$rsp-pdp-port-640$",
    isFeatured: true,
    categoryId: "64922831d04210c2f8f6563b"
  },
  {
    id: "4",
    name: "Gaming Computer",
    description: "Gaming Computer",
    price: 1600,
    stock: 0,
    image: "https://cdn.originpc.com/img/compare-all/gaming-desktops/genesis-7000-series-system-image.png",
    isFeatured: true,
    categoryId: "64922826d04210c2f8f65639"
  },
  {
    id: "5",
    name: "Apple Iphone 14",
    description: "Iphone 14",
    price: 1299,
    stock: 10, // Added a stock value for this product
    image: "https://www.att.com/scmsassets/global/devices/phones/apple/apple-iphone-14-pro/carousel/deeppurple/deeppurple1.png", // Added an image URL
    isFeatured: true,
    categoryId: "64922831d04210c2f8f6563b"
  },
  {
    id: "6",
    name: "Gaming Desk",
    description: "Gaming Desk",
    price: 159,
    stock: 2,
    image: "https://arozzi.com/wp-content/uploads/2023/02/ARENA-BLACK-Gallery-1-v4-1000x1000.jpg",
    isFeatured: false,
    categoryId: "6492282cd04210c2f8f6563a"
  }
];

export default products;
