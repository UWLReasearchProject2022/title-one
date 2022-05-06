# Generated by Django 4.0.3 on 2022-04-30 13:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_review_product_platform'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='product_platform',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='developer', to='api.productplatform'),
        ),
    ]
