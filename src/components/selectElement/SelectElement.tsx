import './SelectElement.scss'

interface SelectProps {
	name: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	options: React.ReactNode[];
	value: number | string;
	label: string;
}

export default function SelectElement({name, onChange, options, value, label}: SelectProps) {
	
	return (
		<label>
			<span>{label}</span>
			<select name={name} onChange={onChange} value={value}>
				{options}
			</select>
		</label>
	);
}
