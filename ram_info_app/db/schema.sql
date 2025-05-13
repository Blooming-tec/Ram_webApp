--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: ram_modules; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ram_modules (
    id bigint NOT NULL,
    brand character varying(255) NOT NULL,
    model character varying(255) NOT NULL,
    type_id bigint NOT NULL,
    clock_speed_mhz integer NOT NULL,
    size_gb integer NOT NULL,
    cas_latency integer NOT NULL,
    ecc boolean DEFAULT false,
    price_eur double precision NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.ram_modules OWNER TO postgres;

--
-- Name: ram_modules_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ram_modules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ram_modules_id_seq OWNER TO postgres;

--
-- Name: ram_modules_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ram_modules_id_seq OWNED BY public.ram_modules.id;


--
-- Name: ram_types; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ram_types (
    id bigint NOT NULL,
    name character varying(255) NOT NULL
);


ALTER TABLE public.ram_types OWNER TO postgres;

--
-- Name: ram_types_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ram_types_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ram_types_id_seq OWNER TO postgres;

--
-- Name: ram_types_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ram_types_id_seq OWNED BY public.ram_types.id;


--
-- Name: ram_modules id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ram_modules ALTER COLUMN id SET DEFAULT nextval('public.ram_modules_id_seq'::regclass);


--
-- Name: ram_types id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ram_types ALTER COLUMN id SET DEFAULT nextval('public.ram_types_id_seq'::regclass);


--
-- Data for Name: ram_modules; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ram_modules (id, brand, model, type_id, clock_speed_mhz, size_gb, cas_latency, ecc, price_eur, created_at) FROM stdin;
4	Patriot	Viper Steel	2	4400	16	19	f	159.99	2025-05-12 19:40:32.614527
5	Corsair	Dominator Platinum RGB	3	5200	32	38	t	249.99	2025-05-12 19:41:32.505951
6	G.Skill	Trident Z5 RGB	3	6000	32	36	t	289.99	2025-05-12 19:41:32.505951
7	Kingston	Fury Renegade	3	6400	32	32	f	319.99	2025-05-12 19:41:32.505951
8	Samsung	Green DDR3	1	1600	4	11	f	29.99	2025-05-12 19:43:19.843446
1	Kingston	Fury Beast	2	3200	8	16	f	45.99	2025-05-12 19:40:32.614527
3	Team Group	T-Force Delta RGB	2	3200	32	16	f	129.99	2025-05-12 19:40:32.614527
2	Crucial	Ballistix	2	3600	16	16	f	79.99	2025-05-12 19:40:32.614527
\.


--
-- Data for Name: ram_types; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ram_types (id, name) FROM stdin;
1	DDR3
2	DDR4
3	DDR5
4	DDR2
\.


--
-- Name: ram_modules_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ram_modules_id_seq', 8, true);


--
-- Name: ram_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ram_types_id_seq', 4, true);


--
-- Name: ram_modules ram_modules_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ram_modules
    ADD CONSTRAINT ram_modules_pkey PRIMARY KEY (id);


--
-- Name: ram_types ram_types_name_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ram_types
    ADD CONSTRAINT ram_types_name_key UNIQUE (name);


--
-- Name: ram_types ram_types_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ram_types
    ADD CONSTRAINT ram_types_pkey PRIMARY KEY (id);


--
-- Name: ram_modules ram_modules_type_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ram_modules
    ADD CONSTRAINT ram_modules_type_id_fkey FOREIGN KEY (type_id) REFERENCES public.ram_types(id);


--
-- PostgreSQL database dump complete
--

