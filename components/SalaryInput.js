const SalaryInput = ({ salary, handleSalaryChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-900">
        Зарплата
      </label>
      <div className="relative mb-2 flex w-2/4">
        <input
          type="number"
          inputMode="numeric"
          className="mt-1 h-10 w-full appearance-none rounded-md border border-gray-300 px-2 shadow-sm"
          placeholder={salary}
          onChange={(e) => handleSalaryChange(e.target.value)}
        />
        <div className="absolute right-6 py-3">₸/мес</div>
      </div>
    </div>
  )
}

export default SalaryInput
