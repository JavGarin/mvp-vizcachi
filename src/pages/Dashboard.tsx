import { useUser } from '../context/UserContext';
import Container from '../components/Container';

const Dashboard: React.FC = () => {
  const { userName, points, history } = useUser();

  return (
    <Container className="py-8">
      <div className="mb-8">
          <h1 className="text-3xl font-bold text-text-primary">Hola, {userName} 👋</h1>
          <p className="text-text-secondary mt-2">Aquí tienes un resumen de tu impacto ambiental.</p>
      </div>
      <div className="bg-surface p-6 rounded-lg shadow-md border border-gray-100 mb-8">
        <h2 className="text-xl font-semibold mb-4">Tus Estadísticas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-md">
                <h3 className="font-semibold text-blue-700">Puntos Vizcachi</h3>
                <p className="text-4xl font-bold text-blue-900 mt-2">{points}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-md">
                <h3 className="font-semibold text-green-700">Residuos Entregados</h3>
                <p className="text-4xl font-bold text-green-900 mt-2">{history.length}</p>
            </div>
            {/* Added for future expansion
            <div className="bg-orange-50 p-4 rounded-md">
                <h3 className="font-semibold text-orange-700">Próximo Nivel</h3>
                <p className="text-2xl font-bold text-orange-900 mt-2">500 pts</p>
            </div>
             */}
        </div>
      </div>

      <div className="bg-surface p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Historial de Reciclaje</h2>
          {history.length > 0 ? (
              <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fecha</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acción</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lugar</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puntos</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {history.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.action}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.location || '-'}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-semibold">+{item.points}</td>
                            </tr>
                        ))}
                    </tbody>
                  </table>
              </div>
          ) : (
              <p className="text-text-secondary">Aún no has realizado acciones de reciclaje.</p>
          )}
      </div>
    </Container>
  );
};

export default Dashboard;
