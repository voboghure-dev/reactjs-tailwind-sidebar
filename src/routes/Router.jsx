import { createBrowserRouter } from 'react-router-dom';
import Auth from '../components/layout/Auth';
import Login from '../components/modules/login/Login';
import Master from '../components/layout/Master';
import Dashboard from '../components/modules/Dashboard';
import Error500 from '../components/modules/Error500';
import Public from './Public';
import Protected from './Protected';
import CategoryList from '../components/modules/category/CategoryList';
import CategoryAdd from '../components/modules/category/CategoryAdd';
import CategoryEdit from '../components/modules/category/CategoryEdit';

const Router = createBrowserRouter([
	// {
	// 	path: '/dashboard',
	// 	element: (
	// 		<Protected>
	// 			<Master />
	// 		</Protected>
	// 	),
	// 	children: [
	// 		{
	// 			path: '/dashboard',
	// 			element: <Dashboard />,
	// 		},
	// 		{
	// 			path: '/dashboard/category/create',
	// 			element: <CategoryAdd />,
	// 		},
	// 		{
	// 			path: '/dashboard/category/edit/:id',
	// 			element: <CategoryEdit />,
	// 		},
	// 		{
	// 			path: '/dashboard/category',
	// 			element: <CategoryList />,
	// 		},
	// 		{
	// 			path: '/dashboard/error-500',
	// 			element: <Error500 />,
	// 		},
	// 	],
	// },
	// {
	// 	path: '/',
	// 	element: (
	// 		<Public>
	// 			<Auth />
	// 		</Public>
	// 	),
	// 	children: [
	// 		{
	// 			path: '/',
	// 			element: <Login />,
	// 		},
	// 	],
	// },
	{
		path: '/',
		element: (
			<Public>
				<Master />
			</Public>
		),
		children: [
			{
				path: '/',
				element: <Dashboard />,
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/product',
				element: <Dashboard />,
			},
			{
				path: '/order',
				element: <Dashboard />,
			},
			{
				path: '/settings',
				element: <Dashboard />,
			},
			{
				path: '/build/submenu1',
				element: <Dashboard />,
			},
			{
				path: '/build/submenu2',
				element: <Dashboard />,
			},
		],
	},
]);

export default Router;
