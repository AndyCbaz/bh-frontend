import { ProviderContext, useSnackbar, VariantType } from 'notistack';

let useSnackbarRef: ProviderContext;

export const SnackbarUtilitiesConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

// eslint-disable-next-line react-refresh/only-export-components
export const SnackbarUtilities = {
  toast(msg: string, variant: VariantType = 'default') {
    useSnackbarRef.enqueueSnackbar(msg, { variant });
  },
  success(msg: string) {
    this.toast(msg, 'success');
  },
  error(msg: string) {
    this.toast(msg, 'error');
  },
};
