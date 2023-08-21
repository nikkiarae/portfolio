interface PortfolioItem {
    title: String,
    description: String
    frameworks: Framework[]
    software: Software[]
}

type Framework = 'Enyo' | 'React' | 'GraphQL' | 'SVG.js';
type Software = 'Windows' | 'MacOS' | 'Xcode' | 'Sketch' | 'VSCode';

const portfolioData: PortfolioItem[] = [
    {
        title: 'Something',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat faucibus elementum. Etiam turpis lacus, venenatis non eros non, congue dapibus dui. Morbi lobortis, augue quis aliquet ullamcorper, purus leo molestie diam, vel cursus elit lectus in odio. Suspendisse et magna velit. Pellentesque interdum eu ipsum a pharetra. Praesent sit amet urna non felis fermentum gravida. Sed eget iaculis quam. Sed et orci sit amet risus consectetur accumsan sit amet nec tortor. Etiam mollis mauris leo, sit amet accumsan mauris fermentum quis.',
        frameworks: ['Enyo', 'SVG.js'],
        software: ['MacOS', 'VSCode']
    },
    {
        title: 'Something',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat faucibus elementum. Etiam turpis lacus, venenatis non eros non, congue dapibus dui. Morbi lobortis, augue quis aliquet ullamcorper, purus leo molestie diam, vel cursus elit lectus in odio. Suspendisse et magna velit. Pellentesque interdum eu ipsum a pharetra. Praesent sit amet urna non felis fermentum gravida. Sed eget iaculis quam. Sed et orci sit amet risus consectetur accumsan sit amet nec tortor. Etiam mollis mauris leo, sit amet accumsan mauris fermentum quis.',
        frameworks: ['React'],
        software: ['Windows', 'VSCode']
    }
]

export default portfolioData
export type { PortfolioItem }