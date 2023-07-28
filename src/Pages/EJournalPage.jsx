
import { Card, CardHeader, Typography, CardBody, Chip, Avatar, } from '@material-tailwind/react';

const TABLE_HEAD = ['Transaction', 'Amount', 'Date'];

const TABLE_ROWS = [
  {
    name: 'Spotify',
    status: 'paid',
    account: 'visa',
  },
  {
    name: 'Amazon',
    status: 'paid',
    account: 'master-card',
  },
  {
    name: 'Pinterest',
    status: 'pending',
    account: 'master-card',

  },
  {
    name: 'Google',
    status: 'paid',
    account: 'visa',

  },
  {
    name: 'netflix',
    status: 'cancelled',
    account: 'visa',

  },
];

export default function EJournalPage() {
  return (
    <div className="container mx-auto">
      <div className="my-4 text-center">
        <Typography variant="h5" className="text-redPrimary font-bold">
          E-Journal dan E-Book
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Ini akan menjadi deskripsi
        </Typography>
      </div>
      <Card className="h-full mx-auto mb-4">
        <CardHeader floated={false} shadow={false} className="rounded-none">

        </CardHeader>
        <CardBody className=" px-0">
          <table className="w-11/12 min-w-max mx-auto table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography variant="small" color="blue-gray" className="font-bold leading-none ">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ img, name, amount, date, status, account, accountNumber, expiry }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography variant="small" color="blue-gray" className="font-bold">
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip size="sm" variant="ghost" value={status} color={status === 'paid' ? 'green' : status === 'pending' ? 'amber' : 'red'} />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                          <Avatar
                            src={account === 'visa' ? 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png' : 'https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png'}
                            size="sm"
                            alt={account}
                            variant="square"
                            className="h-full w-full object-contain p-1"
                          />
                        </div>

                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}
