const FontLoader: React.FC = () => {
	// List of Poppins font variations available in the folder
	const fontList: { name: string }[] = [
		{ name: "Poppins-Bold.ttf" },
		{ name: "Poppins-LightItalic.ttf" },
		{ name: "Poppins-Light.ttf" },
		{ name: "Poppins-Italic.ttf" },
		{ name: "Poppins-Regular.ttf" },
		{ name: "Poppins-MediumItalic.ttf" },
		{ name: "Poppins-Medium.ttf" },
		{ name: "Poppins-ExtraBold.ttf" },
		{ name: "Poppins-BoldItalic.ttf" },
		{ name: "Poppins-SemiBoldItalic.ttf" },
		{ name: "Poppins-SemiBold.ttf" },
		{ name: "Poppins-Black.ttf" },
		{ name: "Poppins-ExtraBoldItalic.ttf" },
		{ name: "Poppins-BlackItalic.ttf" },
		{ name: "Poppins-ExtraLightItalic.ttf" },
		{ name: "Poppins-ExtraLight.ttf" },
		{ name: "Poppins-ThinItalic.ttf" },
		{ name: "Poppins-Thin.ttf" },
	];

	fontList.forEach((font) => {
		const link = document.createElement("link");
		link.href = `/font/Poppins/${font.name}`;
		link.rel = "stylesheet";
		document.head.appendChild(link);
	});

	return (
		<style>
			{`
        body {
          font-family: "Poppins", sans-serif;
        }`}
		</style>
	);
};
export default FontLoader;
