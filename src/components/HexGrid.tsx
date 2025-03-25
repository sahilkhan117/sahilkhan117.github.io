import React from "react";
import Hexagon from "@/components/ui/Hexagon";

type IconProps = {
	size?: number;
};

type IconElement = React.ReactElement<IconProps>;

interface HexGridProps {
	icon: IconElement; // Update this to match your actual prop name (e.g., icons if it's an array)
	iconSize?: number;
}

function HexGrid({
	icons,
	columns = 3,
	size = 100,
	iconSize = 24,
}: {
	icons: React.ReactNode[];
	columns?: number;
	size?: number;
	iconSize?: number;
}) {
	const W = size; // Width of each hexagon
	const H = (Math.sqrt(3) / 2) * size; // Height of each hexagon
	const rows = Math.ceil(icons.length / columns);

	return (
		<div style={{ position: "relative" }}>
			{icons.map((icon, index) => {
				const row = Math.floor(index / columns);
				const col = index % columns;
				const x = col * W + (row % 2 === 1 ? W / 2 : 0); // Offset every other row
				const y = row * H;

				// If iconSize is provided, apply it to the icon component
				const iconElement = icon;

				return (
					<div
						key={index}
						style={{
							position: "absolute",
							left: `${x}px`,
							top: `${y}px`,
						}}>
						<Hexagon size={size}>{iconElement}</Hexagon>
					</div>
				);
			})}
		</div>
	);
}

export default HexGrid;
