import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { Divider } from '../../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InformationModal = () => {
  return (
    <div className="absolute left-[50%] top-[50%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white ">
      <header className="flex items-center justify-center gap-1 rounded-t-2xl border-b-2 border-b-primary-yellow bg-primary-gray-light py-2">
        <FontAwesomeIcon
          className="h-[20px] w-[20px] rounded-full bg-primary-yellow p-2 text-primary-gray "
          icon={faDollar}
        />
        <h1 className="text-center text-[2vh] font-bold">Earnings</h1>
      </header>
      <section className="flex flex-col">
        <p className="px-7 py-2 text-center text-[1.8vh]">
          This is the amount that will be transfered to your bank account by the
          end of the month.
        </p>
        <p className="px-6 py-2 text-center text-[1.8vh]">
          This amount is scheduled to be tarsnfered by 08/31/2023.
        </p>

        <Divider color="primary-yellow" size={1} />
      </section>
      <footer className="mb-4 flex justify-center">
        <button
          style={{ boxShadow: '0px 4px 4px -1px rgba(0,0,0,0.75)' }}
          className="rounded-full bg-primary-yellow px-4 py-2"
        >
          <h1 className="text-sm font-bold">GOT IT</h1>
        </button>
      </footer>
    </div>
  );
};

export default InformationModal;
