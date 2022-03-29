import AppImages from "../assets/images";
import string from "./string";

export const constant = {
  profileimage:
    "https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
  name: "Lucia Hernandez",
  email: "lucia.hernandez@gmail.com",
  location:
    "Av. 115 (Arco vial) casi esq. con Av. 28 de julio, Playa del Carmen, Q Roo, Mex.",
};

export const dashboardList = [
  [
    {
      title: string.surveillance,
      icon: AppImages.ic_surveillance,
    },
    {
      title: string.regulation,
      icon: AppImages.ic_regulation,
    },
  ],
  [
    {
      title: string.guests,
      icon: AppImages.ic_guests,
    },
    {
      title: string.mailbox,
      icon: AppImages.ic_mailbox,
    },
  ],
  [
    {
      title: string.notification,
      icon: AppImages.ic_notification,
    },
  ],
];
