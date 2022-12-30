import SalaryInput from './SalaryInput'

const Inputs = ({ handleSalaryChange, salary }) => {
  return (
    <div className="mb-6 rounded-xl bg-gray-100 p-6">
      <SalaryInput salary={salary} handleSalaryChange={handleSalaryChange} />
    </div>
  )
}

export default Inputs
