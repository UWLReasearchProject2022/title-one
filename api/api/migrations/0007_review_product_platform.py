# Generated by Django 4.0.3 on 2022-04-30 13:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_rename_developer_id_product_developer'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='product_platform',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.productplatform'),
            preserve_default=False,
        ),
    ]