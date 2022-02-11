SELECT
  b.name,
	o.name outlet,
	o.address,
	o.longitude,
	o.latitude,
	COUNT(product.id) total_produk,
	ROUND((SQRT(
		POW(69.1 * (latitude -  106.8249588), 2) + 
    	POW(69.1 * (-6.1753924 - longitude) * COS(latitude / 57.3), 2)
	  ) * 1.609344)::numeric, 2) AS distance
FROM public."Brands" AS b
	INNER JOIN public."Outlets" AS o ON b.id = o.brand_id
	INNER JOIN public."Products" AS product ON b.id = product.brand_id
GROUP BY b.name, outlet, o.address, o.longitude, o.latitude
ORDER BY distance