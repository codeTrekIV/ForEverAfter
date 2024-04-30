import DynamicForm from "../components/dynamicForm";

export default function Page() {
  return (
    <div className="container mx-auto px-4 bg-dark-green">
      Welcome to the dashboard
      <DynamicForm />
    </div>
  );
}
