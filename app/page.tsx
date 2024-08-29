import HeartIcon from "./components/heartIcon/HeartIcon";

export default function Home() {
	return (
		<div>
			<div className="flex">
				<HeartIcon w="100" firstColor="#ff8abd" finalColor="#fce7ba" />
				<HeartIcon w="100" firstColor="#90eaec" finalColor="#faffb0" />
				<HeartIcon w="100" firstColor="#fa7f7f" finalColor="#fce7ba" />
				<HeartIcon w="100" firstColor="#86aaf5" finalColor="#b0eaff" />
			</div>
		</div>
	);
}
