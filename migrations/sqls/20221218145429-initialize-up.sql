/* Replace with your SQL commands */

-- CREATE SEQUENCE "motherboards_id_seq";
-- CREATE TABLE IF NOT EXISTS public.motherboards
-- (
--     id integer NOT NULL DEFAULT nextval('motherboards_id_seq'::regclass),
--     store character varying(255) COLLATE pg_catalog."default",
--     type character varying(255) COLLATE pg_catalog."default",
--     name character varying(255) COLLATE pg_catalog."default",
--     price character varying(255) COLLATE pg_catalog."default",
--     link character varying(255) COLLATE pg_catalog."default",
--     socket character varying(255) COLLATE pg_catalog."default",
--     chipset character varying(255) COLLATE pg_catalog."default",
--     memorytype character varying(255) COLLATE pg_catalog."default",
--     maxmemoryfrequency character varying(255) COLLATE pg_catalog."default",
--     maxmemory character varying(255) COLLATE pg_catalog."default",
--     numberofmemorychannels character varying(255) COLLATE pg_catalog."default",
--     numberofslotspcie1 character varying(255) COLLATE pg_catalog."default",
--     formfactor character varying(255) COLLATE pg_catalog."default",
--     supportedmemorytype character varying(255) COLLATE pg_catalog."default",
--     numberofmemoryslots character varying(255) COLLATE pg_catalog."default",
--     image character varying(255) COLLATE pg_catalog."default",
--     CONSTRAINT motherboards_pkey PRIMARY KEY (id)
-- )

-- TABLESPACE pg_default;

-- ALTER TABLE IF EXISTS public.motherboards
--     OWNER to postgres;



CREATE TABLE IF NOT EXISTS public.clientsvideocards
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    clientid integer,
    videokardid integer,
    CONSTRAINT clientsvideocards_pkey PRIMARY KEY (id),
    CONSTRAINT clientsvideocards_clientid_fkey FOREIGN KEY (clientid)
        REFERENCES public.clients (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT clientsvideocards_videokardid_fkey FOREIGN KEY (videokardid)
        REFERENCES public.videokards (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.clientsvideocards
    OWNER to postgres;
