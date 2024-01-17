export default function Input({ label, invalid, ...props }) {
    return (
        <p>
            <label className={`block mb-2 text-xs font-bold tracking-wide uppercase ${invalid ? 'text-red-400' : 'text-stone-300'} `}>{label}</label>
            <input className={`w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow ${invalid ? 'text-red-400 bg-red-100 border-red-300' : 'text-gray-700'}`} {...props} />
        </p>
    );
}