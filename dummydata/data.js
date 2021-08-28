import Vendor from '../models/Vendor';
import Availability from '../models/Availability';

export const VENDORS = [
    new Vendor('bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', 'Bruut Zwolle', 'Hier komt tekst als een beschrijving', 'cafe', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg', ['https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg', 'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg', 'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg', 'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg', 'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg']),
    new Vendor('3ac68afc-c605-48d3-a4f8-fbd91aa97f63', 'Gandhi Zwolle', 'Hier komt tekst als een beschrijving', 'restaurant', 'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg', ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']),
    new Vendor('58694a0f-3da1-471f-bd96-145571e29d72', 'Poppe', 'Hier komt tekst als een beschrijving', 'terras', 'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg', ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']),
    new Vendor('5wqq4a0f-3d44-471f-bd96-145571e29d72', 'Cafe Blij', 'Hier komt tekst als een beschrijving', 'terras', 'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg', ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']),
    new Vendor('58qqqa0f-3dee-471f-bd96-145571e29d72', 'Vlieger Huys', 'Hier komt tekst als een beschrijving', 'terras', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg', ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']),
    new Vendor('5394da0f-3wa1-471f-bd96-145571e29d72', 'Blauwvinger', 'Hier komt tekst als een beschrijving', 'terras', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg', ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']),
    new Vendor('5894ad0f-3wa1-471f-bd96-145571e29d72', 'Bloopers Cafe', 'Hier komt tekst als een beschrijving', 'terras', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg', ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']),
    new Vendor('589d4a0f-3wa1-471f-bd96-14557ddd1e22', 'Sally O Brien', 'Hier komt tekst als een beschrijving', 'terras', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg', ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']),
    new Vendor('5ss94da0f-3wa1-471f-bd96-145571eddd2', 'Knutsel Cafe', 'Hier komt tekst als een beschrijving', 'terras', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg', ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']),
    new Vendor('58q34ad0f-3wa1-471f-bd96-145571e29d2', 'Vito', 'Hier komt tekst als een beschrijving', 'terras', 'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg', ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']),
    new Vendor('58q94a0df-3wa1-471f-bd96-145571dde22', 'Cafe Zwolle', 'Hier komt tekst als een beschrijving', 'terras', 'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg', ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'])
];

export const AVAIL = [
    new Availability('1', 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', '2', '17:00',  '18:00'),
    new Availability('2', '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', '4', '17:00',  '18:00'),
    new Availability('3', '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', '2', '18:00',  '19:00'),
    new Availability('4', '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', '2', '18:30',  '19:30'),
    new Availability('5', '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', '2', '20:00',  '21:00'),
    new Availability('6', '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', '4', '20:00',  '21:00'),
    new Availability('7', '5894ad0f-3wa1-471f-bd96-145571e29d72', '2', '17:00',  '20:00'),
    new Availability('8', '589d4a0f-3wa1-471f-bd96-14557ddd1e22', '2', '17:00',  '20:00'),
    new Availability('9', '5ss94da0f-3wa1-471f-bd96-145571eddd2', '2', '17:00',  '20:00'),
    new Availability('10', '58q34ad0f-3wa1-471f-bd96-145571e29d2', '2', '17:00',  '20:00'),
    new Availability('11', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00'),
    new Availability('12', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00'),
    new Availability('13', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00'),
    new Availability('14', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00'),
    new Availability('15', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00'),
    new Availability('16', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00'),
    new Availability('17', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00'),
    new Availability('18', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00'),
    new Availability('19', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00'),
    new Availability('20', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00'),
    new Availability('21', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00'),
    new Availability('22', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00'),
    new Availability('23', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00'),
    new Availability('24', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00'),
    new Availability('25', '58q94a0df-3wa1-471f-bd96-145571dde22', '2', '17:00',  '20:00')
];