import { Mafs, CartesianCoordinates, Plot, Text, useMovablePoint } from "mafs"


function BasicInteractive() {

  const point = useMovablePoint([0, 0], {
    constrain: ([x, y]) => [
        x,
        x * x,
    ],
  })

  return (
    <Mafs
      viewBox={{ x: [-5, 5], y: [-10, 10] }}
      preserveAspectRatio={false}
    >
      <CartesianCoordinates
        subdivisions={4}
      />
      <Plot.OfX y={(x) => x * x} />

      {point.element}

      <Text attach="e" x={0} y={-1} size={40}>
          Point:
      </Text>

      <Text attach="e" x={1} y={-1} size={30}>
          ({point.x.toFixed(2)}, {point.y.toFixed(2)})
      </Text>

    </Mafs>
  )
}

export default BasicInteractive;