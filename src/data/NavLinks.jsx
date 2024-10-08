import { nanoid } from "nanoid";
import { About } from "../Pages/About";
import { Sale } from "../Pages/Sale";
import { Credit } from "../Pages/Credit";
import { Service } from "../Pages/Service";
import { Dropshipping } from "../Pages/Dropshipping";
import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home/home";

export const Links = [
  {
    id: nanoid(),
    component: Home,
  },
  {
    id: nanoid(),
    path: "about",
    component: About,
  },
  {
    id: nanoid(),
    path: "sale",
    component: Sale,
  },
  {
    id: nanoid(),
    path: "credit",
    component: Credit,
  },
  {
    id: nanoid(),
    path: "service",
    component: Service,
  },
  {
    id: nanoid(),
    path: "dropshipping",
    component: Dropshipping,
  },
  {
    id: nanoid(),
    path: "contact",
    component: Contact,
  },
];
