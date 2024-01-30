import { forwardRef, useCallback } from "react";
import { useSnackbar, SnackbarContent, CustomContentProps } from "notistack";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";



interface ReportCompleteProps extends CustomContentProps {
  allowDownload?: boolean;
}

const SnackbarError = forwardRef<HTMLDivElement, ReportCompleteProps>(
  ({ id, ...props }, ref) => {
    
    const { closeSnackbar } = useSnackbar();

    const handleDismiss = useCallback(() => {
      closeSnackbar(id);
    }, [id, closeSnackbar]);

    return (
      <SnackbarContent ref={ref} className='w-full'>
        <div
          className="w-full rounded-xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(55,55,55,1) 0%, rgba(141,141,148,1) 59%, rgba(195,191,191,1) 100%)",
          }}
        >
          <div className="flex items-center px-2 py-4 gap-4 ">
            <button
              className="rounded-full bg-[#cc0303] flex items-center p-1"
              onClick={handleDismiss}
            >
              <FontAwesomeIcon
                style={{
                  color: "white",
                  width: "2vh",
                  height: "2vh",
                  borderRadius: "50%",
                }}
                icon={faXmark}
              />
            </button>
            <div className="flex flex-grow justify-start">
              <h1 className="text-[2.2vh] text-white font-semibold">
                {props.message}
              </h1>
            </div>
          </div>
        </div>
      </SnackbarContent>
    );
  }
);

SnackbarError.displayName = "ReportComplete";

export default SnackbarError;
