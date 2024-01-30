import React from 'react';
import ReactDOM from 'react-dom/client';
// Importaciones de react router dom
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes/Routes.tsx';
// importar react-query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
const client = new QueryClient();
// Importaciones de notistack
import { SnackbarProvider } from 'notistack';
// Importaciones de utils
import { SnackbarUtilitiesConfigurator } from './utils/snackbar/snackbar-manager.tsx';
//Importacion de componentes
import SnackbarError from './components/SnackbarError.tsx';
import SnackbarSuccess from './components/SnackbarSuccess.tsx';

// Importaciones de estilos generales
import './styles/index.css';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <SnackbarProvider Components={{
        success: SnackbarSuccess,
        error: SnackbarError
      }}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        {/* <ReactQueryDevtools /> */}
        <SnackbarUtilitiesConfigurator/>
      </SnackbarProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
