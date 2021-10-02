delete from adresy where id is NOT NULL;
delete from students where imie is NOT NULL;
delete from oceny where id is NOT NULL;

insert into 
  adresy (id, ulica, miasto, kod, "createdAt", "updatedAt") 
  values 
  ('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Niemiecka', 'Lublin', '20-020', current_timestamp, current_timestamp),
  ('6c72616e-2368-11ec-9621-0242ac130002', 'Angielska', 'Warszawa', '20-007', current_timestamp, current_timestamp),
  ('73bd76fc-2368-11ec-9621-0242ac130002', 'Rosyjska', 'Rzeszów', '20-021', current_timestamp, current_timestamp),
  ('76f20d7e-2368-11ec-9621-0242ac130002', 'Ukraińska', 'Horodło', '22-523', current_timestamp, current_timestamp);

insert into students (nr_indeksu, nazwisko, imie, "createdAt", "updatedAt") 
values 
  ('a0ea937c-643e-4116-b936-f3c8d261e87c', 'Marcin', 'Konopnicki', current_timestamp, current_timestamp),
  ('e00c6f91-11a8-4e58-8b88-ee44e34291f9', 'Karol', 'Krawczyk', current_timestamp, current_timestamp);

insert into oceny (id, przedmiot, ocena, "studentNrIndeksu", "createdAt", "updatedAt") 
values 
  (1, 'matematyka', 3, 'a0ea937c-643e-4116-b936-f3c8d261e87c', current_timestamp, current_timestamp),
  (2, 'fizyka', 2, 'a0ea937c-643e-4116-b936-f3c8d261e87c', current_timestamp, current_timestamp);