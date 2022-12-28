import Layout from "../../layouts/layout";
export default function Gradients() {
    return (
      <Layout>
        <div className="grid grid-cols-6 gap-4 p-8">
        <div className="h-[320px] bg-gradient-rgb-110-231-183 rounded-lg"></div>
        <div className="h-[320px] bg-gradient-rgb-110-231-183 rounded-lg"></div>
        <div className="h-[320px] bg-gradient-rgb-110-231-183 rounded-lg"></div>
        <div className="h-[320px] bg-gradient-to-br from-indigo-500 to-indigo-800 rounded-lg"></div>
        <div className="h-[320px] bg-gradient-to-br from-indigo-500 to-indigo-800 rounded-lg"></div>
        <div className="h-[320px] bg-gradient-to-br from-indigo-500 to-indigo-800 rounded-lg"></div>
        </div>
      </Layout>)
}