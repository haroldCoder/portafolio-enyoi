import { useState, useEffect } from "react";
import axios from "axios";

function Solicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/solicitudes")
      .then((response) => setSolicitudes(response.data))
      .catch((error) => console.error(error));
  }, []);

    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Lista de solicitudes</h1>
        <div className="bg-white shadow overflow-hidden rounded-md">
            <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                    ID
                </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                    Nombre
                </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                    Correo
                </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                    Teléfono/celular
                </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                    Solicitud
                </th>
                <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                    Comentario
                </th>
                <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Editar</span>
                </th>
                <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Eliminar</span>
                </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {solicitudes.map((solicitud) => (
                <tr key={solicitud.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {solicitud.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {solicitud.nombre}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {solicitud.correo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {solicitud.telefono}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {solicitud.solicitud}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {solicitud.comentario}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Editar
                    </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a href="#" className="text-red-600 hover:text-red-900">
                        Eliminar
                    </a>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    </div>
    )
                }