/* Replace with your SQL commands */
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