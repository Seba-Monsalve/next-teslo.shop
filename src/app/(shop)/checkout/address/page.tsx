'use server'

import { Title } from '@/components';
import { AddressForm } from './ui/AddressForm';
import { getCountries } from '@/actions/checkout/get-countries';
import { auth } from '@/auth';
import { getUserAddress } from '@/actions';

export default async function AddressPage() {

  const countries = await getCountries();

  const session = await auth();

  if (!session)
    return (<h2>No hay una session activa</h2>)

  const userAddress = await getUserAddress(session!.user.id)
  console.log(userAddress);

  return (
    <div className="flex flex-col sm:justify-center sm:items-center mb-72 px-10 sm:px-0">



      <div className="w-full  xl:w-[1000px] flex flex-col justify-center text-left">

        <Title title="Dirección" subtitle="Dirección de entrega" />

        <AddressForm countries={countries} userStoredAddres={userAddress} />

      </div>




    </div>
  );
}