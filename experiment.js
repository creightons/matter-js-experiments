import Matter from 'matter-js';

function runExample() {
    const engine = Matter.Engine.create();

    const world = engine.world;

    const width = 400;
    const height = 400;

    const render = Matter.Render.create({ 
        element: document.body,
        engine,
        options: {
            wireframes: false,
            width,
            height,
            background: 'transparent',
        },
    });

    Matter.Render.run(render);
    
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    Matter.World.add(world, [
        // Pink block
        Matter.Bodies.rectangle(200, 100, 100, 100, {
            render: {
                fillStyle: '#EA1070',
            },
        }),

        // Blue Block
        Matter.Bodies.rectangle(100, 100, 50, 100, {
            render: {
                fillStyle: 'blue',
            },
        }),

        // Bottom Support
        Matter.Bodies.rectangle(width/2, height, width, 10, {
            isStatic: true,
            render: {
                fillStyle: 'gray',
            },
        }),

        // Left Support
        Matter.Bodies.rectangle(2.5, height - 30, 5, 60, {
            isStatic: true,
            render: {
                fillStyle: 'gray',
            },
        }),

        // right Support
        Matter.Bodies.rectangle(width - 2.5, height - 30, 5, 60, {
            isStatic: true,
            render: {
                fillStyle: 'gray',
            },
        }),

    ]);
}

runExample();
