interface FilterStrategy{
apply(image: string): void;
}

class GrayScaleStrategy implements FilterStrategy{
    public apply(image: string): void{
        console.log(`aid ${image} Grayscale`);
        
    }
}



class SepiaStrategy implements FilterStrategy{
    public apply(image: string): void{
        console.log(`paid ${image} Sepia strategy `);
        
    }
}

class NegativeStrategy implements FilterStrategy{
    public apply(image: string): void{
        console.log(`paid ${image} negative strategy`);
        
    }
}


class ImageProccessor{
    private apply: string

    constructor(private strategy: FilterStrategy){}

    public setFilterStrategy (strategy: FilterStrategy): void{
        this.strategy = strategy;
    }



    public applyFilter(image: string): void{
        this.strategy.apply(image)
    }
}

//client code
const imageProccessor = new ImageProccessor(new GrayScaleStrategy());
imageProccessor.applyFilter("image.jpg");


imageProccessor.setFilterStrategy(new SepiaStrategy());
imageProccessor.applyFilter("Image2.jpg")


